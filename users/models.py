from django.db import models
from django.contrib.auth.models import AbstractUser
class User(AbstractUser):

    user_profile_photo = models.ImageField(upload_to='fotos_perfil/', blank=True, null=True)
    is_teacher = models.BooleanField(default=False)
