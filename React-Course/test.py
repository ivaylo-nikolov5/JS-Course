import socket

# set the message and port number
message = "Hello, world!"
port = 5000

# create a socket object
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)

# send the message to the broadcast address
s.sendto(message.encode(), ('192.168.0.255', port))

# close the socket
s.close()