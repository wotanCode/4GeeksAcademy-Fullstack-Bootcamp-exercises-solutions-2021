all_colors = [
	{"label": 'Red', "sexy": True},
	{"label": 'Pink', "sexy": False},
	{"label": 'Orange', "sexy": True},
	{"label": 'Brown', "sexy": False},
	{"label": 'Pink', "sexy": True},
	{"label": 'Violet', "sexy": True},
	{"label": 'Purple', "sexy": False},
]

#Your code go here:
def generate_li(color):
    return color["sexy"]

def filter_colors(color):
    return f"<li>{color['label']}</li>"

new_colors = filter(generate_li, all_colors)
final_colors = list(map(filter_colors, new_colors))

for i in range(len(final_colors)):
    if i < len(final_colors)-1:
        print(final_colors[i], end="")
    else:
        print(final_colors[i])