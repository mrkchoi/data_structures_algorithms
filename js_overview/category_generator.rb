require 'csv'
require 'colorize'
require 'fileutils'

# Instructions
system("clear")
puts "Welcome to a/A's Practice Assessment Generator".cyan
puts "This generator will create a practice test based on your input. " \
      "You can choose how many problems from each category to include in your test. "
puts "This program will generate 3 files in this folder: practice_test, spec, and solution. " \
      "Complete the practice_test file, running the spec file to check your answers. " \
      "When your time is up (you are timing yourself, right?), compare your answers to the solutions."
puts "Good luck!"

# read in csv with test info
tests = CSV.read('resources/list.csv', headers: true, header_converters: :symbol, converters: :all)

# list possible categories
categories = Array.new
tests.each do |test|
  categories << test[1]
end
categories = categories.uniq
puts "Possible categories: #{categories.join(", ")}".magenta
puts

# get user request
puts "Input your requests, separated by commas and spaces please"
puts "Example input: " + "array: 2, recursion: 1, sort: 1".yellow
puts "If you would like ALL problems from ALL categories, input: " + "all".yellow
puts "If you'd like all problems, EXCEPT bonus problems, input: " + "all, except: bonus".yellow
input = gets.chomp.split(", ")

system("clear")
puts "I am generating a practice assessment that will be saved"
puts "as 'category_assessment/' in your current directory"

if input == ["all"]
  input = categories.map { |cat| cat += ": 20" }
end

if input == ["all", "except: bonus"]
  no_bonus_categories = categories.reject {|cat| cat == "bonus"}
  input = no_bonus_categories.map { |cat| cat += ": 20" }
end

categoryrequests = Hash.new(0)
input.each do |request|
  req = request.downcase.split(": ")
  categoryrequests[req[0]] = req[1].to_i
end

# make test array for each category
master = Array.new
categories.each do |category|
  problems_in_category = Array.new
  tests.each do |test|
    if category == test[1]
      problems_in_category << test
    end
  end

  # pick tests at random from each category
  n = categoryrequests[category]
  master = master.concat(problems_in_category.sample(n))
end

# Remove old category assessment if it exists
FileUtils.rm_r("category_assessment") if File.directory?("category_assessment")

# Create relevant directories for category assessment
Dir.mkdir("category_assessment")
Dir.mkdir("category_assessment/lib")
Dir.mkdir("category_assessment/spec")
Dir.mkdir("category_assessment/solution")
Dir.mkdir("category_assessment/src")

# Create new problem, spec and solution files
practice_test = File.open("category_assessment/src/js_assessment.js", "w")
spec = File.open("category_assessment/spec/js_assessment_spec.js", "w")
solution = File.open("category_assessment/solution/js_assessment_solution.js", "w")

# Copy SpecRunner.html into assessment directory
FileUtils.cp("./resources/SpecRunner.html", "./category_assessment/")

# Copy lib folder into practice directory
FileUtils.cp_r("./resources/lib/jasmine-2.5.2", "./category_assessment/lib")

# loop through master tests and add text to the new files
master.each do |test|
  practice_test << File.read(test[2]) << "\n"
  spec << File.read(test[3]) << "\n"
  solution << File.read(test[4]) << "\n"
end

# close the files that were just created
practice_test.close
spec.close
solution.close

sleep(0.5)
puts 
puts "Done!"
