file = open('numbers.txt', 'r')
save_file = open('decoded.txt', 'w')
text = file.readlines()

output= ''
for line in text:
    item = line.split()
    for i in item:
        output += chr(int(i))
    output += '\n'

save_file.write(output)
file.close()
save_file.close()