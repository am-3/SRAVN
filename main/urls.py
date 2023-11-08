from django.urls import path
from . import views

urlpatterns = [
    path('', views.start),
    path('hello', views.hello),
    path('nav', views.nav),
    path('form', views.form),
    path('table', views.table),
    path('procedure', views.procedure),
    path('about', views.about),
    path('status', views.status, name="status")
]