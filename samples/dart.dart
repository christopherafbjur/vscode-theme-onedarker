String stringify(int x, int y) {

}

String upperCaseIt(String str) {

}

int a; 
a ??= 3;
print(a); 

a ??= 5;
print(a); 

print(1 ?? 3);
print(null ?? 12);

String foo = 'a string';
String bar;

String baz = foo /* TODO */ bar;

void updateSomeVars() {
  bar /* TODO */ 'a string';
}

final aListOfStrings = ['one', 'two', 'three'];
final aSetOfStrings = {'one', 'two', 'three'};
final aMapOfStringsToInts = {
  'one': 1,
  'two': 2,
  'three': 3,
};

final aListOfInts = <int>[];
final aSetOfInts = <int>{};
final aMapOfIntToDouble = <int, double>{};