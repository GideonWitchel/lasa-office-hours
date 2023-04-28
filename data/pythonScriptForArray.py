import csv
datafile = open('Class Data.csv', 'r')
data = list(csv.reader(datafile))
print(data)

datafile = open('Hours with Pointers.csv', 'r')
data = list(csv.reader(datafile))
newData = []
for row in range(0, len(data)):
    newRow = []
    for item in range(0, len(data[row])):
        newRow.append(data[row][item].split(","))
    newData.append(newRow)

print(newData)
