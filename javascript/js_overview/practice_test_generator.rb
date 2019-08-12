require 'csv'
require 'colorize'
require 'fileutils'

# Instructions
system("clear")
puts "I am generating a practice assessment that will be saved"
puts "as 'practice_assessment/' in your current directory"

# Read in csv with problem info
problems = CSV.read(
          'resources/list.csv', 
          headers: true, 
          header_converters: :symbol, 
          converters: :all
        )

# Define number of each category problem 
categories = {
  recursion: 1,
  array: 1,
  string: 1,
  enumerable: 1,
  sort: 1,
  function: 2
}

# Grab appropriate problems for each category
master = []

categories.each do |category, num|
  problems_in_category = []
  problems.each do |problem| 
    problems_in_category << problem if category.to_s == problem[1]
  end

  # my_each should be on every test, so if the category is enumerable we add
  # it in here, delete it, and then lower will add a random problem from 
  # remaining enumerables
  if category == :enumerable 
    my_each = problems_in_category.find { |el| el[0] == 'my_each' }
    master << my_each
    problems_in_category.delete(my_each)
  end

  if category == :function 
    inherits = problems_in_category.find { |el| el[0] == 'inherits' }
    master << inherits
    problems_in_category.delete(inherits)
  end

  if category == :string
    pig_latinify = problems_in_category.find { |el| el[0] == 'pig_latinify' }
    problems_in_category.delete(pig_latinify)
  end

  master.concat(problems_in_category.sample(num))
end

# Remove old practice assessment if it exists
FileUtils.rm_r("practice_assessment") if File.directory?("practice_assessment")

# Create relevant directories for practice assessment
Dir.mkdir("practice_assessment")
Dir.mkdir("practice_assessment/lib")
Dir.mkdir("practice_assessment/spec")
Dir.mkdir("practice_assessment/solution")
Dir.mkdir("practice_assessment/src")

# Create new problem, spec and solution files
practice_test = File.open("practice_assessment/src/js_assessment.js", "w")
spec = File.open("practice_assessment/spec/js_assessment_spec.js", "w")
solution = File.open("practice_assessment/solution/js_assessment_solution.js", "w")

# Copy README into practice directory
FileUtils.cp("./resources/README.md", "./practice_assessment/")

# Copy SpecRunner.html into practice directory
FileUtils.cp("./resources/SpecRunner.html", "./practice_assessment/")

# Copy lib folder into practice directory
FileUtils.cp_r("./resources/lib/jasmine-2.5.2", "./practice_assessment/lib")

# Loop through master problems and add text to the new files
master.each do |problem|
  practice_test << File.read(problem[2]) << "\n"
  spec << File.read(problem[3]) << "\n"
  solution << File.read(problem[4]) << "\n"
end

# Close the files that were just created
practice_test.close
spec.close
solution.close

puts "Beep." 
puts "Bop."
puts "Boop." 
puts "Beep." 
puts "Done!"