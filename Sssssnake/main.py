import pygame
file = open('numbers.txt', 'r')
text = file.readlines()

window = pygame.display.set_mode([350,350])
pygame.display.set_caption("Picture")

run = True
while run:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run=False
    iterator_x = 0
    iterator_y = 0
    for line in text:
        item = line.split()
        for i in item:
            pygame.draw.rect(window, [int(i),int(i),int(i)], pygame.Rect(iterator_x*10, iterator_y*10,10,10))
            iterator_x += 1
        iterator_y += 1
        iterator_x = 0
    pygame.display.update()
pygame.quit()