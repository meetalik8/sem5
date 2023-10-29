import json
import boto3

dynamo = boto3.client('dynamodb')

def lambda_handler(event, context):
    sid = event['st_id'] #same as coloumn names and keep all string
    sname = event['st_name']
    smarks = event['st_marks']
    
    dynamo.put_item(
        TableName="tablename",
        Item={
            'st_id': {'S': sid},
            'st_marks': {'S': smarks},
            'st_name': {'S': sname}
        }
    )
    
    print("Data added successfully to DynamoDB!")
