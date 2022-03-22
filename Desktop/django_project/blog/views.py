from django.shortcuts import render


posts = [
    {
        'author': 'Yusuf Muhammad',
        'title': 'Blog Post 1',
        'content' : 'First post content',
        'date_posted' : 'Dec 15, 2020'
    },
    {
        'author': 'Aliyu Muhammad',
        'title': 'Blog Post 2',
        'content' : 'Second post content',
        'date_posted':'Dec 16, 2020'
    }
]


def home(request):
    context = {
        'posts': posts
    }
    return render(request, 'blog/home.html', context)


def about(request):
     return render(request, 'blog/about.html', {'title': 'About'} )