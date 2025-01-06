from django.db import models

class User(models.Model):

    user_name = models.CharField(max_length=100, default='')
    user_email = models.EmailField(unique=True, default='')
    user_profile_photo = models.ImageField(upload_to='fotos_perfil/', blank=True, null=True)
    is_teacher = models.BooleanField(default=False)

    def __str__(self):
        return f'Nome: {self.user_name} | E-mail: {self.user_email}'


# Select *, (select count(1) from aluno_aula aa where aa.aula_id = a.id ) numero_de alunos from Aula a
