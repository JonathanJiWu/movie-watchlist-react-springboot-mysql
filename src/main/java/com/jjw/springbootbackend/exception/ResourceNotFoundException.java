package com.jjw.springbootbackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
//Serialization is the conversion of the state of an object into a byte stream
//serialization is the conversion of a Java object into a static stream (sequence) of bytes which can then be saved to a database or transferred over a network.
public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    public ResourceNotFoundException(String message){
        super(message);
    }

}
