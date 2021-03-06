Register service
================

Request
-------

Url
  "/services"

Verb
  "post"

Body
  .. code:: js

    {
      "serviceName": string;
      "version": string;
      "ip": string;
      "port": number;
      "url": string;
      "messageType": string[];
    }

+-------------+-----------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
|  Parameter  | Mandatory | Data Type | Description                                                                                                                                   |
+=============+===========+===========+===============================================================================================================================================+
| serviceName |     Y     |   string  | Service Name, must comply with RFC 1123, only allowsthe ASCII letters 'a' through 'z' , the digits '0' through '9', and the minus sign ('-'). |
+-------------+-----------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
|   version   |     Y     |   string  | Service Version                                                                                                                               |
+-------------+-----------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
|      ip     |     Y     |   string  | The ip of the service instance node, it could also be a hostname                                                                              |
+-------------+-----------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
|     port    |     Y     |   number  | The port of the service instance node                                                                                                         |
+-------------+-----------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
|     url     |     Y     |   string  | The url to call to send message                                                                                                               |
+-------------+-----------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| messageType |     Y     |  string[] | List of messageType subscribe                                                                                                                 |
+-------------+-----------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------+

Response
--------

Success Code
  201
    Valid Request

Error Code
  422
    Invalid Parameters
  500
    Internal Server Error

Body
  .. code:: js

    {
      "serviceName": string,
      "version": string,
      "uuid": string
    }

+-------------+-----------------------------------------------------+
|  Parameter  | Description                                         |
+-------------+-----------------------------------------------------+
| serviceName | The service name of the microservice bus            |
+-------------+-----------------------------------------------------+
|   version   | The version of the microservice bus                 |
+-------------+-----------------------------------------------------+
|     uuid    | The Universal Unique Identifier used by the service |
+-------------+-----------------------------------------------------+
