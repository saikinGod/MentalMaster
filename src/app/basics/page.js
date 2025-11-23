import { BookOpen, Plus, Minus, X, Divide, Percent, Square, Box, Calculator, Brain, Zap, Trophy, Target, Lightbulb, AlertCircle, CheckCircle, TrendingUp, Users, Clock, Sparkles } from 'lucide-react';

export default function MathBasicsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="w-16 h-16 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold">Welcome to the World of Mathematics!</h1>
          </div>
          <p className="text-xl md:text-2xl mb-4 text-center">The Universal Language of Numbers and Logic</p>
          <p className="text-lg opacity-90 text-center">Master the fundamentals and become a calculation champion!</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* What is Mathematics */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <BookOpen className="w-10 h-10 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">What is Mathematics?</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              Mathematics is the science of numbers, quantities, shapes, and patterns. It's everywhere around us - from counting money to building bridges, from cooking recipes to space exploration!
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Math helps us solve problems, make decisions, and understand the world better. Whether you're shopping, gaming, or planning your day, you're using mathematics!
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 flex items-start">
              <Lightbulb className="w-6 h-6 text-blue-600 mr-3 shrink-0 mt-1" />
              <p className="text-gray-800 font-semibold">Fun Fact: The word "mathematics" comes from the Greek word "máthēma" which means "knowledge" or "learning"!</p>
            </div>
          </div>
        </section>

        {/* Addition */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Plus className="w-10 h-10 text-green-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Addition (Plus)</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Addition</strong> means combining two or more numbers to get a total. It's like putting things together!
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-4">
              <h3 className="text-2xl font-bold text-green-800 mb-3">Formula: a + b = c</h3>
              <p className="text-gray-700 mb-2">Where 'a' and 'b' are numbers you're adding, and 'c' is the sum (answer)</p>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 1: 5 + 3 = 8</p>
                <p className="text-gray-600">If you have 5 apples and get 3 more, you have 8 apples total!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 2: 125 + 75 = 200</p>
                <p className="text-gray-600">You saved $125 in January and $75 in February = $200 total savings!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 3: 1,234 + 5,678 = 6,912</p>
                <p className="text-gray-600">Adding large numbers works the same way - just stack and add column by column!</p>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded flex items-start">
              <Sparkles className="w-6 h-6 text-yellow-600 mr-3 shrink-0 mt-1" />
              <p className="font-semibold text-yellow-800">Quick Tip: Addition is commutative! This means 3 + 5 = 5 + 3. The order doesn't matter!</p>
            </div>
          </div>
        </section>

        {/* Subtraction */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Minus className="w-10 h-10 text-red-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Subtraction (Minus)</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Subtraction</strong> means taking away one number from another. It's the opposite of addition!
            </p>
            <div className="bg-red-50 p-6 rounded-lg mb-4">
              <h3 className="text-2xl font-bold text-red-800 mb-3">Formula: a - b = c</h3>
              <p className="text-gray-700 mb-2">Where 'a' is the starting number, 'b' is what you subtract, and 'c' is the difference (answer)</p>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 1: 10 - 4 = 6</p>
                <p className="text-gray-600">You have 10 cookies and eat 4, you have 6 left!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 2: 500 - 235 = 265</p>
                <p className="text-gray-600">You had $500 and spent $235, you have $265 remaining!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 3: 1,000 - 999 = 1</p>
                <p className="text-gray-600">Even with large numbers, subtraction shows the difference!</p>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded flex items-start">
              <Sparkles className="w-6 h-6 text-yellow-600 mr-3 shrink-0 mt-1" />
              <p className="font-semibold text-yellow-800">Quick Tip: You can check subtraction by adding! 10 - 4 = 6, and 6 + 4 = 10 ✓</p>
            </div>
          </div>
        </section>

        {/* Multiplication */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <X className="w-10 h-10 text-purple-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Multiplication (Times)</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Multiplication</strong> is repeated addition! Instead of adding the same number many times, we multiply. It's a shortcut that makes math faster!
            </p>
            <div className="bg-purple-50 p-6 rounded-lg mb-4">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">Formula: a × b = c</h3>
              <p className="text-gray-700 mb-2">Where 'a' is multiplied by 'b' to get the product 'c'</p>
              <p className="text-gray-600 text-sm">Also written as: a * b = c</p>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 1: 6 × 4 = 24</p>
                <p className="text-gray-600">6 bags with 4 apples each = 24 apples total! (Same as 6+6+6+6 or 4+4+4+4+4+4)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 2: 12 × 12 = 144</p>
                <p className="text-gray-600">A dozen dozens! Common in measurements and calculations.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 3: 25 × 8 = 200</p>
                <p className="text-gray-600">Working 8 hours at $25/hour = $200 earned!</p>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded flex items-start">
              <Sparkles className="w-6 h-6 text-yellow-600 mr-3 shrink-0 mt-1" />
              <p className="font-semibold text-yellow-800">Quick Tip: Multiplication is also commutative! 3 × 5 = 5 × 3 = 15</p>
            </div>
            <div className="mt-4 bg-blue-50 p-4 rounded flex items-start">
              <Target className="w-6 h-6 text-blue-600 mr-3 shrink-0 mt-1" />
              <p className="font-semibold text-blue-800">Pro Trick: To multiply by 10, just add a zero! 45 × 10 = 450</p>
            </div>
          </div>
        </section>

        {/* Division */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Divide className="w-10 h-10 text-orange-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Division (Divide)</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Division</strong> is splitting a number into equal parts. It's the opposite of multiplication!
            </p>
            <div className="bg-orange-50 p-6 rounded-lg mb-4">
              <h3 className="text-2xl font-bold text-orange-800 mb-3">Formula: a ÷ b = c</h3>
              <p className="text-gray-700 mb-2">Where 'a' is divided by 'b' to get the quotient 'c'</p>
              <p className="text-gray-600 text-sm">Also written as: a / b = c or a/b = c</p>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 1: 20 ÷ 4 = 5</p>
                <p className="text-gray-600">Share 20 candies among 4 friends = 5 candies each!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 2: 100 ÷ 5 = 20</p>
                <p className="text-gray-600">Split $100 five ways = $20 per person!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 3: 144 ÷ 12 = 12</p>
                <p className="text-gray-600">A dozen eggs in 12 cartons = 1 dozen per carton!</p>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded flex items-start">
              <Sparkles className="w-6 h-6 text-yellow-600 mr-3 shrink-0 mt-1" />
              <p className="font-semibold text-yellow-800">Quick Tip: Check division with multiplication! 20 ÷ 4 = 5, and 5 × 4 = 20 ✓</p>
            </div>
            <div className="mt-4 bg-red-50 p-4 rounded flex items-start">
              <AlertCircle className="w-6 h-6 text-red-600 mr-3 shrink-0 mt-1" />
              <p className="font-semibold text-red-800">Important: Never divide by zero! It's undefined and breaks mathematics!</p>
            </div>
          </div>
        </section>

        {/* Modulo */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Percent className="w-10 h-10 text-indigo-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Modulo (Remainder)</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Modulo</strong> gives you the remainder after division. It's super useful in programming and real-world problems!
            </p>
            <div className="bg-indigo-50 p-6 rounded-lg mb-4">
              <h3 className="text-2xl font-bold text-indigo-800 mb-3">Formula: a % b = r</h3>
              <p className="text-gray-700 mb-2">Where 'r' is the remainder when 'a' is divided by 'b'</p>
              <p className="text-gray-600 text-sm">Also written as: a mod b = r</p>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 1: 17 % 5 = 2</p>
                <p className="text-gray-600">17 ÷ 5 = 3 with remainder 2 (because 5 × 3 = 15, and 17 - 15 = 2)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 2: 20 % 4 = 0</p>
                <p className="text-gray-600">20 divides evenly by 4, so remainder is 0!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 3: 100 % 7 = 2</p>
                <p className="text-gray-600">100 ÷ 7 = 14 remainder 2 (7 × 14 = 98, and 100 - 98 = 2)</p>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded flex items-start">
              <Sparkles className="w-6 h-6 text-yellow-600 mr-3 shrink-0 mt-1" />
              <p className="font-semibold text-yellow-800">Real Use: Check if a number is even! Any number % 2 = 0 is even, otherwise it's odd!</p>
            </div>
          </div>
        </section>

        {/* Square */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Square className="w-10 h-10 text-pink-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Square (Power of 2)</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Squaring</strong> means multiplying a number by itself. It's called "square" because it's the area of a square!
            </p>
            <div className="bg-pink-50 p-6 rounded-lg mb-4">
              <h3 className="text-2xl font-bold text-pink-800 mb-3">Formula: a² = a × a</h3>
              <p className="text-gray-700 mb-2">The small 2 is called an "exponent" - it tells you how many times to multiply</p>
              <p className="text-gray-600 text-sm">Read as: "a squared" or "a to the power of 2"</p>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 1: 5² = 5 × 5 = 25</p>
                <p className="text-gray-600">A square with sides of 5 units has an area of 25 square units!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 2: 10² = 10 × 10 = 100</p>
                <p className="text-gray-600">Easy pattern: 10² = 100, 100² = 10,000!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 3: 12² = 12 × 12 = 144</p>
                <p className="text-gray-600">A dozen squared = 144 (called a "gross")!</p>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-blue-600 mr-3 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-800">Memorize these perfect squares for speed:</p>
                  <p className="text-gray-700 mt-2">1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81, 10²=100, 11²=121, 12²=144, 15²=225, 20²=400, 25²=625</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cube */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Box className="w-10 h-10 text-teal-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Cube (Power of 3)</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Cubing</strong> means multiplying a number by itself three times. It's the volume of a cube!
            </p>
            <div className="bg-teal-50 p-6 rounded-lg mb-4">
              <h3 className="text-2xl font-bold text-teal-800 mb-3">Formula: a³ = a × a × a</h3>
              <p className="text-gray-700 mb-2">The small 3 means multiply the number three times</p>
              <p className="text-gray-600 text-sm">Read as: "a cubed" or "a to the power of 3"</p>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 1: 3³ = 3 × 3 × 3 = 27</p>
                <p className="text-gray-600">A cube with edges of 3 units has a volume of 27 cubic units!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 2: 5³ = 5 × 5 × 5 = 125</p>
                <p className="text-gray-600">Perfect for calculating storage spaces and containers!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 3: 10³ = 10 × 10 × 10 = 1,000</p>
                <p className="text-gray-600">Notice: 10³ = 1,000 (one thousand!)</p>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-blue-600 mr-3 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-800">Perfect cubes to remember:</p>
                  <p className="text-gray-700 mt-2">1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216, 7³=343, 8³=512, 9³=729, 10³=1,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Square Root */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">√ Square Root</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Square root</strong> is the opposite of squaring! It asks "what number times itself equals this?"
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-4">
              <h3 className="text-2xl font-bold text-green-800 mb-3">Formula: √a = b (where b² = a)</h3>
              <p className="text-gray-700 mb-2">The √ symbol is called a "radical sign"</p>
              <p className="text-gray-600 text-sm">Read as: "square root of a"</p>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 1: √25 = 5</p>
                <p className="text-gray-600">Because 5 × 5 = 25, the square root of 25 is 5!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 2: √100 = 10</p>
                <p className="text-gray-600">Because 10 × 10 = 100!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 3: √144 = 12</p>
                <p className="text-gray-600">A square with area 144 has sides of length 12!</p>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded flex items-start">
              <Sparkles className="w-6 h-6 text-yellow-600 mr-3 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-yellow-800">Common square roots:</p>
                <p className="text-gray-700 mt-2">√1=1, √4=2, √9=3, √16=4, √25=5, √36=6, √49=7, √64=8, √81=9, √100=10, √121=11, √144=12</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cube Root */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Box className="w-10 h-10 text-cyan-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Cube Root</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Cube root</strong> is the opposite of cubing! It asks "what number times itself three times equals this?"
            </p>
            <div className="bg-cyan-50 p-6 rounded-lg mb-4">
              <h3 className="text-2xl font-bold text-cyan-800 mb-3">Formula: ∛a = b (where b³ = a)</h3>
              <p className="text-gray-700 mb-2">The ∛ symbol means cube root</p>
              <p className="text-gray-600 text-sm">Read as: "cube root of a"</p>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 1: ∛27 = 3</p>
                <p className="text-gray-600">Because 3 × 3 × 3 = 27!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 2: ∛125 = 5</p>
                <p className="text-gray-600">Because 5 × 5 × 5 = 125!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800">Example 3: ∛1,000 = 10</p>
                <p className="text-gray-600">Because 10 × 10 × 10 = 1,000!</p>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded flex items-start">
              <Sparkles className="w-6 h-6 text-yellow-600 mr-3 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-yellow-800">Common cube roots:</p>
                <p className="text-gray-700 mt-2">∛1=1, ∛8=2, ∛27=3, ∛64=4, ∛125=5, ∛216=6, ∛343=7, ∛512=8, ∛729=9, ∛1000=10</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Fast Calculation Matters */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Zap className="w-10 h-10 text-yellow-500 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Why Fast Calculation is Important</h2>
          </div>
          <div className="bg-linear-to-r from-yellow-50 to-orange-50 rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Being able to calculate quickly isn't just about getting answers fast - it's about building confidence, saving time, and opening doors to new opportunities!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Mental Agility</h3>
                </div>
                <p className="text-gray-700">Fast mental math keeps your brain sharp and improves problem-solving skills. It's like a workout for your mind!</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Save Time Daily</h3>
                </div>
                <p className="text-gray-700">From splitting bills to calculating discounts while shopping, quick math saves you precious minutes every single day!</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Career Advantage</h3>
                </div>
                <p className="text-gray-700">Many jobs require quick calculations - from retail and finance to engineering and data analysis. Speed gives you an edge!</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Build Confidence</h3>
                </div>
                <p className="text-gray-700">When you can solve problems quickly, you feel more confident in academic and professional settings!</p>
              </div>
            </div>

            <div className="mt-8 bg-linear-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg">
              <div className="flex items-start">
                <Lightbulb className="w-8 h-8 mr-4 shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Real-World Applications</h3>
                  <ul className="space-y-2 text-lg">
                    <li><CheckCircle className="w-5 h-5 inline mr-2" />Shopping: Calculate discounts and compare prices instantly</li>
                    <li><CheckCircle className="w-5 h-5 inline mr-2" />Cooking: Adjust recipe portions on the fly</li>
                    <li><CheckCircle className="w-5 h-5 inline mr-2" />Travel: Convert currencies and calculate distances</li>
                    <li><CheckCircle className="w-5 h-5 inline mr-2" />Finance: Budget planning and investment calculations</li>
                    <li><CheckCircle className="w-5 h-5 inline mr-2" />Gaming: Quick strategic decisions based on numbers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Human Calculators */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Users className="w-10 h-10 text-indigo-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">Amazing Human Calculators</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Throughout history, some people have demonstrated extraordinary mental calculation abilities. These "human calculators" can perform complex mathematical operations in their heads faster than most people can with a calculator!
            </p>

            <div className="space-y-6">
              <div className="bg-linear-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-900 mb-3">Shakuntala Devi - "The Human Computer"</h3>
                <p className="text-gray-700 mb-2">
                  This Indian mathematician could multiply two 13-digit numbers in just 28 seconds! In 1977, she calculated the 23rd root of a 201-digit number mentally, a feat that got her into the Guinness Book of World Records.
                </p>
                <div className="flex items-center mt-3 text-purple-700">
                  <Target className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Her secret: Pattern recognition and memory techniques</span>
                </div>
              </div>

              <div className="bg-linear-to-r from-green-50 to-teal-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-3">Srinivasa Ramanujan</h3>
                <p className="text-gray-700 mb-2">
                  A self-taught Indian mathematician who made extraordinary contributions to mathematical analysis, number theory, and continued fractions. He could see mathematical patterns that others couldn't imagine!
                </p>
                <div className="flex items-center mt-3 text-green-700">
                  <Target className="w-5 h-5 mr-2" />
                  <span className="font-semibold">His secret: Deep intuition and pattern visualization</span>
                </div>
              </div>

              <div className="bg-linear-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-orange-900 mb-3">Scott Flansburg - "The Human Calculator"</h3>
                <p className="text-gray-700 mb-2">
                  Holds the Guinness World Record for fastest mental calculation. He can add the same number to itself more times in 15 seconds than someone can do with a calculator!
                </p>
                <div className="flex items-center mt-3 text-orange-700">
                  <Target className="w-5 h-5 mr-2" />
                  <span className="font-semibold">His secret: Breaking down problems into simpler steps</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <Lightbulb className="w-8 h-8 text-blue-600 mr-4 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">You Can Become Fast Too!</h3>
                  <p className="text-gray-700 mb-3">
                    You don't need to be a genius to calculate quickly! These techniques can help anyone improve:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Practice daily:</strong> Even 10 minutes a day makes a huge difference!</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Learn shortcuts:</strong> Tricks like multiplying by 11, 25, or 99</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Break down problems:</strong> Split complex calculations into smaller, easier steps</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Visualize:</strong> Picture numbers and operations in your mind</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Use our calculator:</strong> Practice with instant feedback to improve faster!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-xl p-12 text-center">
            <Calculator className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Become a Math Master?</h2>
            <p className="text-xl mb-6">Start practicing now with our fast calculation tools!</p>
            <p className="text-lg opacity-90 mb-8">
              Remember: Every expert was once a beginner. The key is consistent practice and patience. You've got this!
            </p>
            <div className="flex items-center justify-center text-lg">
              <Sparkles className="w-6 h-6 mr-2" />
              <span>Mathematics is not about being perfect, it's about being persistent!</span>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-2">Keep Learning, Keep Growing! </p>
          <p className="text-gray-400">Mathematics is the language of the universe - master it, and unlock infinite possibilities!</p>
        </div>
      </footer>
    </div>
  );
}