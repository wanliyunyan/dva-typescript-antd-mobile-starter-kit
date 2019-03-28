import React from "react";

export const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return null;
  }
};
