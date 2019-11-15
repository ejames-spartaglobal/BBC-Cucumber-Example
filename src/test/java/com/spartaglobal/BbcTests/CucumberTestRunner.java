package com.spartaglobal.BbcTests;

import static org.junit.Assert.assertTrue;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin={"pretty","html:reports/report.html"},
        features = "classpath:features",
        glue = "com.spartaglobal.stepdefs"
        )

public class CucumberTestRunner
{ }
