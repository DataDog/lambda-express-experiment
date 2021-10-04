This is an Express application that gets deployed behind an API Gateway, with a lambda authorizer.
Invoke by calling the API Gateway endpoint(s) with the following header `Authorization: allow`

e.g.
```
curl -H "Authorization: allow" https://API-GATEWAY-NAME.execute-api.sa-east-1.amazonaws.com/dev/
```
