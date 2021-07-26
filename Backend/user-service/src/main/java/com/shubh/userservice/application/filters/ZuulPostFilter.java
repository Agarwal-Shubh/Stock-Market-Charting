package com.shubh.userservice.application.filters;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.exception.ZuulException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants;

public class ZuulPostFilter extends ZuulFilter {

    private Logger log = LoggerFactory.getLogger(ZuulPostFilter.class);

    @Value("${zuul.filter.post.enabled}")
    private boolean isEnabled;

    @Override
    public String filterType() {
        return FilterConstants.POST_TYPE;
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
        log.info("Zuul Post Filter...");
        return null;
    }
}
