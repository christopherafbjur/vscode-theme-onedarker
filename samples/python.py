from threading import Thread, Timer, jsonify
import ecommerce.shipping
from ecommerce.shipping import calc_test
import json

TEST = 15
var_a = 1000
var_b = 'single'
var_c = "double"
var_d = True
var_e = None
var_f = """
Hello I am a
multiline string
"""
var_g = f'I am a {var_b} quoted template string'
var_h = f"I am a {var_b} quoted template string"

list = [1, 2, 3, 'Hi', "Hi", True, False, None]
list[0]
x, y, z = list

matrix = [[1, 2, 3], [4, 5, 6]]

tuple = (1, 2, 3)

dict = {
  "name": "JohnDoe",
  "year": 2020,
  "bool": True,
  "func": json.dumps({"test": "testing"})
}
x = dict["name"]
x = dict.get("name")

@app.route('/events')
def get_events(data):
    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


class Testing:
  'Testing class'
  testCount = 0

  def __init__(self, testa, testb):
    self.name = testa
    self.link = testb
    Testing.testCount += 1

  def displayCount(self):
    print("Total test %d" % Testing.testCount)

  def displayTester(self):
    print("Name : ", self.name,  ", Link: ", self.link)

  @classmethod
  def test(cls):
    return cls('Default', 'No link')




myTest = Testing()
myTest.x = 10
myTest.displayCount()
myTest = Testing.test()

import re

line = "Please test me"

searchObj = re.search( r'\-\s(\w+)', line, re.M|re.I)

if searchObj:
   print("searchObj.group() : ", searchObj.group())
   print("searchObj.group(1) : ", searchObj.group(1))
   print("searchObj.group(2) : ", searchObj.group(2))
else:
   print("Nothing found!!")


#I am a comment

success = False
for letter in 'Python':
   print('Current Letter :', letter)
   if success:
     print('Successful')
     break
else:
  print('I tried but I failed')



def calc(a, b):
  a + b = 30
  a - b = 30
  a * b = 30
  a / b = 30
  a % b = 0
  a**b =10
  return a, b

calc(1, 2)
calc(a=1, b=2)

def calc_more(*numbers):
  for number in numbers:
    print(number)

def save_user(**user):
  print(user)

save_user(id=1, name="John", age=25)

message = "Hi"
def greet(name):
  global message
  message = 'Bye'

var = 100
if ( var == 100 ) : print "Value of expression should be 100"
print "Bye!"


is_hot = True
is_cold = False

if is_hot:
  print "It's hot"
elif is_cold
  print "It's not hot"
else:
  pass

if is_hot and is_cold:
  print("This is a fun mix")

if is_cold and not is_hot:
  print("Sweden in a nutshell")

age = 30
if age >= 18 and age < 65
  print("Can work!")

18 <= age < 65


baz = 'Yey'

if baz > 2:
  print("success")

if baz < 2:
  print(":'(")

if baz == 3:
  print(':)')


try:
    myTest = int(input('Age: '))
    print(age)
except ValueError:
    print('Invalid value')