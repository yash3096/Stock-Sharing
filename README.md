# Stock-Sharing
network programming language project to implement real time sharing of stock details to pcs in same LAN

This project was made to implement file sharing for my engineering network programming language project 
I have used node.js to make api call to google api.
the data once being fetched is sent to other remote pcs on same lan using nfs protocol
For the steps involved in nfs protocol https://quidsup.net/tutorials/?p=nfs site has been refered to
The node.js code was fetching the details every 10 seconds and was updating all other pcs continuously
the file was view in html page which on being refereshed every 10 seconds viewed new data
