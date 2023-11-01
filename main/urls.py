from django.urls import path
from . import views

urlpatterns = [
    path('hello', views.start),
    path('nav', views.nav),
    path('form', views.form),
    path('table', views.table)
]