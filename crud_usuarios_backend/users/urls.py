
from django.urls import path, include
from rest_framework import routers
from .views import TaskView

router = routers.DefaultRouter()
router.register('user', TaskView, 'user')

urlpatterns = [
    path('api/v1/', include(router.urls))
]
