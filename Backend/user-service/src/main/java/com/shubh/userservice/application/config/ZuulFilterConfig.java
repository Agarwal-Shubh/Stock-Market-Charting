package com.shubh.userservice.application.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.shubh.userservice.application.filters.ZuulErrorFilter;
import com.shubh.userservice.application.filters.ZuulPostFilter;
import com.shubh.userservice.application.filters.ZuulPreFilter;
import com.shubh.userservice.application.filters.ZuulRouteFilter;

@Configuration
public class ZuulFilterConfig {

    @Bean
    public ZuulErrorFilter zuulErrorFilter(){
        return new ZuulErrorFilter();
    }

    @Bean
    public ZuulPreFilter preFilter(){
        return new ZuulPreFilter();
    }

    @Bean
    public ZuulPostFilter postFilter(){
        return new ZuulPostFilter();
    }

    @Bean
    public ZuulRouteFilter routeFilter(){
        return new ZuulRouteFilter();
    }
}