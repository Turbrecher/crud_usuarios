from django.db import models


class User(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=9)
    birth_date = models.DateField()

    def __str__(self):
        return self.name + self.surname
