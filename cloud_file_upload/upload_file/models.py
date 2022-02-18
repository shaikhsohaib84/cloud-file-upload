from django.db import models

# Create your models here.
class UploadFile(models.Model):
    id = models.AutoField(primary_key=True)
    file = models.FileField() # upload_to='uploads/' /Users/apple/Desktop/FileUpload
    uploaded_at = models.DateTimeField(auto_now_add=True)