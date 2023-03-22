file = open('text.txt','r')
text = file.readlines()
save_file = open('save.txt', 'w')

output = ''

for line in text:
    item = line.split()
    for i in item:
        chr_code = ord(i)-10
        while chr_code < 65:
            chr_code += 26
        output += chr(chr_code)
    output += '\n'
save_file.write(output)
file.close()
save_file.close()
