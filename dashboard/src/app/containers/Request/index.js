import React from "react";

import RequestDetails from "./RequestDetails";
import SendDetails from "./SendDetails";
import PaymentDetails from "./PaymentDetails";

function Request() {
  return (
    <div className="requests flex vertical">
      <div>
        <RequestDetails />
      </div>
      <div className="flex horizontal">
        <div className="flex flex-1 vertical">
          <SendDetails />
        </div>
        <div className="flex flex-1 vertical">
          <PaymentDetails />
        </div>
      </div>
    </div>
  );
}

export default Request;
