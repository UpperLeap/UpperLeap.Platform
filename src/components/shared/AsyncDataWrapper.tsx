import Loader from "./Loader";
import Placeholder from "./Placeholder";
import RequestError from "./RequestError";

type AsyncDataWrapperProps = {
  children: React.ReactNode;
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
  customError?: React.ReactNode;
  customLoader?: React.ReactNode;
  isEmpty?: boolean;
  placeholderIcon?: JSX.Element;
  placeholderTitle?: string;
  placeholderDescription?: string;
};

const AsyncDataWrapper = ({
  isLoading,
  isError,
  isSuccess,
  isEmpty = false,
  children,
  customError,
  customLoader,
  placeholderIcon,
  placeholderTitle,
  placeholderDescription,
}: AsyncDataWrapperProps) => {
  return (
    <div className="w-full">
      {isLoading && (
        <div className="mx-auto w-fit py-10">{customLoader || <Loader />}</div>
      )}
      {isError && (
        <div className="mx-auto py-10">{customError || <RequestError />}</div>
      )}
      {isSuccess && !isEmpty && children}
      {isEmpty && isSuccess && (
        <div className="py-5">
          <Placeholder
            icon={placeholderIcon || <div />}
            title={placeholderTitle || ""}
            description={placeholderDescription || ""}
          />
        </div>
      )}
    </div>
  );
};

export default AsyncDataWrapper;
