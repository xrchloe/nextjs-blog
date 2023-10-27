import React from "react";
import Icon from "../../components/Icon";

const FeatureCard = ({ title, subtitle, description, icon }) => {
  return (
    <div className="max-w-xxx m-auto rounded-3xl bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-start justify-center p-6">
            <div className="flex flex-row items-center">
              <img src="/images/google.svg" className="w-9 h-9 mr-3" />
              <h6 className="font-normal text-md">{title}</h6>
            </div>
            <h5 className="text-lg font-bold">{subtitle}</h5>
          </div>
          <div className="flex flex-col items-start justify-center p-6">
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="text-normal text-gray-500"
            ></div>
            <div className="text-normal text-gray-900">timeline</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-6 max-w-sm">
          <img
            src="/images/owg-1.png"
            alt="Order with Google"
            className="-mb-5"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
