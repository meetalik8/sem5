provider "aws" {
  access_key = "."
  secret_key = "."
  region     = "us-east-1"
}

resource "aws_instance" "Ubuntu" {
  ami           = "."
  instance_type = "t2.micro"

  tags = {
    Name = "TerraInstance"
  }
}

resource "aws_s3_bucket" "my_bucket" {
  bucket = "my-unique-bucket-name" # Set your desired bucket name
  acl    = "private" # Access Control List, can be "private", "public-read", "public-read-write", "authenticated-read", etc.
}
