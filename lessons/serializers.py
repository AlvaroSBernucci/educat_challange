from rest_framework import serializers
from .models import Lesson

class LessonSerializer(serializers.ModelSerializer):
    student_count = serializers.SerializerMethodField()

    class Meta:
        model = Lesson
        fields = ['id', 'lesson_title', 'lesson_description', 'lesson_schedule', 'teacher', 'student_count']

    def get_student_count(self, obj):
        return obj.students.count()

class LessonAddStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['students']

    def update(self, instance, validated_data):
        user = self.context['request'].user
        if not user.is_teacher:
            instance.students.add(user)
        return instance
