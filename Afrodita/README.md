## CLASSES

| Store |
|---|
| |
|+ getters <br> + setters|

| Products |
|---|
| - name: String <br> - description: String <br> - stock: String |
| + getters <br> + setters <br> + changeStock(integer) <br> + applyDiscount(discount) |

| User |
|---|
|- name: String <br>- last name: String <br>- email: String <br>- password: String <br>- Country: String|
|+ getters <br> + setters <br> + createAccount <br> + deleteAccount|

| Cart |
|---|
|- cartItem <br>- bugdet: Float|
|+ getters <br>+ setters <br>+ createNewCart <br>+ addProduct <br>+ deleteProduct|

|cartItem|
|---|
|- product <br>- quantity: Integer|
|+ getters <br>+ setters|

|Discount|
|---|
|- percentage <br>- initialDate: Date <br>- finishDate: Date|
|+ getters <br>+ setters|

|Shipment|
|---|
|- user <br>- Address: String <br>- phoneNumber: String|
|+ getters <br>+ setters|

|Payment|
|---|
|-|
|+|
