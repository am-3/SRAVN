from django.urls import path
from . import views

urlpatterns = [
    path('', views.start),
    path('hello', views.hello),
    path('nav', views.nav),
    path('form', views.form),
    path('table', views.table)
]