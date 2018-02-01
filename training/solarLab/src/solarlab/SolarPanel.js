/*
 * Copyright 2009-2017 C3, Inc. dba C3 IoT (www.c3iot.com). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret
 * and proprietary information of C3 IoT and its licensors. Reproduction, use and distribution
 * of this material in any form is strictly prohibited except as set forth in a written
 * license agreement with C3 IoT and/or its authorized distributors.
 * This product may be covered by one or more U.S. patents or pending patent applications.
 */


function calculateAreaSquareFeet(solarPanel) {

  var area = (solarPanel.widthInches * solarPanel.lengthInches) / 144;

  return area;
}

function calculateTotalAreaSquareFeet() {

  var totalArea = 0;

  var solarPanels = SolarPanel.fetch({include: "id, widthInches, lengthInches"});

  solarPanels.objs.each(function(solarPanel) {
    totalArea += calculateAreaSquareFeet(solarPanel);
  });

  return totalArea;
}