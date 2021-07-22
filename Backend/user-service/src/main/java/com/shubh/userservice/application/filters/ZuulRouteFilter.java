package com.shubh.userservice.application.filters;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;


public class ZuulRouteFilter extends ZuulFilter {

    private Logger log = LoggerFactory.getLogger(ZuulRouteFilter.class);

    @Value("${zuul.filter.route.enabled}")
    private boolean isEnabled;



 
    @Override
    public String filterType() {
        return FilterConstants.ROUTE_TYPE;
    }

    @Override
    public int filterOrder() {
        return 0;
    }

    @Override
    public boolean shouldFilter() {
        return isEnabled;
    }

    @Override
    public Object run() throws ZuulException {
        log.info("Zuul Route Filter...");
        RequestContext context = RequestContext.getCurrentContext();
        // validate the received credentials
        return null;
    }
    
}
