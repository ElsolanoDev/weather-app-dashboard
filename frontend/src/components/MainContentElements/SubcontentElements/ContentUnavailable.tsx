interface ContentUnavailableProps {
  message: string;
}

function ContentUnavailable({ message }: ContentUnavailableProps) {
  return <div className="card main-card flex-fill">{message}</div>;
}
export default ContentUnavailable;
