import json

def lambda_handler(event, context):
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('An Image has been added!')
    }

# Create a S3 bucket (unblock public access) -> create a new IAM role (usecase LAMBDA) with s3fullaccess and cloudwatch full access 
# Create Lambda function and add the role (runtime python) -> add trigger (s3 bucket for POST) -> change code
# Add image to bucket and check logs
