package com.sakthivel.mydiary.dto;

import lombok.*;

@Getter @Setter
@NoArgsConstructor
public class Response<T> {

    private boolean success;
    private T data;
    private String message;

    public Response(T data) {
        this.success = true;
        this.data = data;
    }

    public Response(String message) {
        this.success = false;
        this.message = message;
    }

    public Response(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
}