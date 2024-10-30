from django.urls import path
from . import views

urlpatterns = [
    path('', views.start),
    path('hello', views.hello),
    path('nav', views.nav),
    
    path('form', views.form),
    path('confirm', views.form_conf),
    
    path('table', views.table),
    
    path('procedure', views.procedure),
    path('status', views.status),
    path('about', views.about),

    path('logout', views.logout_view)
]