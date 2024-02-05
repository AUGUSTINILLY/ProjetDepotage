package com.depotage.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class ResourceNoFoundException {
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public static class ResourceNotFoundException extends Exception{

        private static final long serialVersionUID = 1L;

        public ResourceNotFoundException(String message){
            super(message);
        }
    }
}
