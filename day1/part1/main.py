calories = []
elfTotal = 0

with open('input.txt','r') as file:
  print("Starting...")
  read = file.read()
  print(read)
  nums = [ int(x) for x in read.split() ]
  for x in nums:
    num = int(x)
    elfTotal += num
    if (x == None):
      calories.append(elfTotal)
      elfTotal = 0
  print("done!")

calories.sort(reverse=True)
print(calories)