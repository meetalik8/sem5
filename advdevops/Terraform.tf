provider "aws" {
access_key="."
secret_key="."
region="us-east-1"
}
resource "aws_instance" "Ubuntu" {
ami="."
instance_type="t2.micro"
tags = {
    Name = "TerraInstance"  
  }
}

#terraform init -> terraform plan -> terraform apply -> terraform destroy 
