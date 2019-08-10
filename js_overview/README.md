# a/A A05 Practice Test Generator

This is a practice test generator to prepare for A05. This repo used an A05 generator created by [Peter McKinley](https://github.com/souiukoto) as a basis, which itself had its basis in the A01 prep repo created by [Mallory Bulkley](https://github.com/mallorybulkley). Both are former App Academy students, who we are proud to call alumni! 

The purpose of this tool is to allow you to get comfortable with the types of problems that could pop up on an assessment. Note that the purpose is **NOT TO MEMORIZE SOLUTIONS** - the problems included in this generator are _not_ an exhaustive list of what could show up on the assessment. Choosing to memorize solutions without understanding them may get you by in the short-term, but will never be worth it in the long run. Practice thinking and struggling through these problems so that you are agile and prepared for anything come assessment day.

## How to use this repo

1. Clone this repo onto your local machine.

2. Navigate to your local repo directory in terminal and run one of the following generators (detailed in below section):

   - `ruby practice_test_generator.rb` - Generates a practice test in a folder called `practice_assessment`
   - `ruby category_generator.rb` - Generates a test by category, based on how many problems of each category you want in a folder called `category_assessment` (requires following a prompt)

3. Navigate to the directory that was generated from running one of the above commands. The specs live in the `spec/` directory. Your code should go in the `src/` directory in the file provided. Problems are described in that file. To run specs, `cd` into the directory for the assessment you are working on and run `open SpecRunner.html` in terminal - this will open up the specs in the browser. Anytime you want to re-run the specs, simply refresh this tab in the browser (note that with certain syntax errors such as infinite loops you may need to actually close and re-open the tab).

4. Check your solutions against those in `solutions/` directory.

**Note**: Do not modify anything in the `problems`, `solutions`, or `specs` directories at the top level of this repo - the files in these directories are used to generate practice assessments. Instead, run one of the generators listed below and work on problems in the test directory created by the generator.

## Generators

All of the practice problems are listed and categorized in `list.csv`, which can be found in the `resources/` directory. Categories include: recursion, sorting, enumerable, array, string, and bonus. Bonus problems will not appear on the assessment but are good to practice and can help you gain a deeper understanding of some of the more complex problems, especially with regards to recursion. There are two different generators included in this repo - they are detailed below.

### Practice Assessment Generator

**Command**: `ruby practice_test_generator.rb`

Generates a random practice assessment including problems across all categories (except for bonus). Test files will be generated inside of a directory called `practice_assessment`.

### Problems by Category Generator

**Command**: `ruby category_generator.rb` (must follow prompt after)

Prompts you for your desired number of questions from each category, and uses your input and the CSV file to generate a test of randomly selected practice problems from each category specified. Test files will be generated inside of a directory called `category_assessment`.

**Generate assessment with all problems** - Input `all` when prompted

**Generate assessment with all problems, except bonus** - Input `all, except: bonus` when prompted

---

For both generators, 3 files will be created inside the generated folder as follows:

- `js_assessment.js` contains the problems to be solved

- `js_assessment_spec.js` combines the specs for the chosen problems into one file for easy testing

- `js_assessment_solution.js` combines the solutions for each problem

**Warning**: If you run the generator again, it will re-write the previously generated files and erase your previous work. If you wish to save your previous work, you will need to rename the files. This applies to both generators.
