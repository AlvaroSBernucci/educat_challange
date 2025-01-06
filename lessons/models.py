from django.db import models

class Lesson(models.Model):

    lesson_title = models.CharField(max_length=100, default='')
    lesson_description = models.TextField()
    lesson_schedule = models.TimeField()
    teacher = models.ForeignKey('users.User', on_delete=models.CASCADE, limit_choices_to={'is_teacher': True})
    students = models.ManyToManyField("users.User", related_name="lessons")

    def __str__(self):
        return self.lesson_title

    def __repr__(self):
        return f"<Lesson: {self.lesson_title}>"

    def student_count(self):
        return self.students.count()
