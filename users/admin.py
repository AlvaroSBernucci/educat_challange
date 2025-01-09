from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
from .forms import CustomUserCreationForm, CustomUserChangeForm

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ['username', 'email', 'is_teacher', 'is_staff']

    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('is_teacher', 'user_profile_photo')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('is_teacher', 'user_profile_photo')}),
    )

admin.site.register(User, CustomUserAdmin)
