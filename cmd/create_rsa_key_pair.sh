#!/bin/bash

# Generate a 4096 bit RSA private key
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:4096

# Generate the public key from the private key
openssl rsa -pubout -in private_key.pem -out public_key.pem
