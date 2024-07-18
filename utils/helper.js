const getBlurImg = () => {
  return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAGyAooDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwb/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDxoAoAiqqKA1GWogqooKqKCqigoAiqigKigKigAAoAAAAAAACKgoioAioAioCAAiKgIioozUq1KDNRagIAIgCoAAAAAAAAAAAAAAqoogqKIoAKqKAACgAAA4gDYAiqqKA1GWogqooKqKCqigoAiqigKigKigAAoAAAAAAAoioAioAioAioCAAiKgIioozUq1KDNRagIAIgCoAAAAAAAAAAAAAAqoogqKIoAKqKAACgAAA4gDYAiqqKA1EWIKqLAVUUFVFBQAVUUQVFAVFAVFAAAAAAAAFEVAEVAEVAEVAQAERUBEVKozUq1KDNRagIAIIqKgAAAAAAAAAAAAACqiiCooigoCooAAKAAADiANgCKqooKsRYgqooKqKCqigoAKqKAqKAqKAqKgAAAKAAAAIAAioAioCAAiKgCKyCIqAlRaijNRagIAAiorIAAAAAAAAAAAAACqiiCooKCiCooCooAAACDiAroAqAqKCqioKqRQVUUFVFBQAVUUBUUBUUABBQAAAAAAFEAAQAEAEABEVARFQERUBKlWpVGai1BRFQQRUVkAAAAAAAAAAAAABQBFVFBVRRBUUBUVFAAAAcQBsVFAVFBVRUFipFBVRQVUUBUUFVFAVFAVBBQAURQAAAAEVFAAEABAAQAERUBEVARFSglSqlVWai1AEVBBFRWQAAAAAAAAAAAAAFAEVUUFBQFRUAFAAAABxAGxUUBUUFVFQVUUFVFBVRQFRQUAFABQEFAAABRAFEAAAAAQBRAAQAERUBEVARKqUESqlVWai1AEVBBFRWQAAAAAAAAAAAAAFVFEFRQVUUBUVAVFAAAABxAG1AAVFFVUVBVRRFVFBVRUBUUFABQAUABUUAAAAAAAAAEAABAFERUARUBEVARKqAiVUqqzUWoAioIIqKgAIAAAAAAAAAAAAqoAqooiqioCooAAKAAAK4gDSgAKiiqqKgqooiqioKIoKqKAqKCiKAqKAACgAAAAAAAgACKgCKigioCAAiKgIlVARKrNFSoqKCKggiiogAgAAAAAAAAAAACgAqooKqKgKigAAoAAAOKoo0AAKiiqqKgqooKIqIqooKqAKqKAqKAqKAAAqAKAAAAgAAAIACAogAIioAioKiKgJWa1WaCIqKCKggAqIAIAAAAAAAAAAAAoAKqKgoAKqAKACiKAADioDQAAqKKqoINKyoKqKiKqKCiKCqgCqgCgAoigAAAAAAAAIqAAgAAIAoiKgqAgCADNRagIiooIqCACogAgAAAAAAAAAAACgAqoqCgAoAKIoAACoA5gDQAAqKKoCCqigqoqCiKIqooCooKIoCooAAKIoAAAAAgAAAgAIqCiKgCAoiKgIioCVFQERUUEVBABUQAQAAAAAAAAAAABQAVUVAVFBRFAVFAAAABzAGgABUUUVFQVUUFAQVUURRFBVQBVQBQAUQBQAAAAAAAEAAEFAAQAERUUEAESqgJUVARFRQRUEAFRABAAAAAAAAAAAAFAFUBBVQBVQEUAFEUAAVyVFFAAABVVFQURQVUVBQAVUBFVFAVFAVAFAAABRAFEAAAAQVUABFQBFRQQARFQBlUBAQBFRQRUEAFRABAAAAAAAAAAAAFAFURUFABRFBRFAAAABzAFUAAAVVQQVUUFVlQVUVBRFEURQURQURQAAUQBRAFEAUQAAABBQEABFBFQBABEVARFRRAAEVBABUEVBAAAAAAAAAAAAFAFFRUBUUBUAUABUAUQBgAUVFAAAVFFUBBVRQURQVUBFVAFABRFQFQBRAFAAAAEFFQAAQAAUQAQEARUBEVAEBRAAQAQAVBFQQAAAAAAAAAAABQAABVAQURQFQBRFAABgAUABQAFQFVUEFVFBVQBVQEVUAVUAURQFQBRFAAAAAEAVAABAAAEAVAQAEAQARFRQAEQAABUEVBAAAAAAAAAAAABUUAAUVBBVQBRFAAAABkBVAEBUAUAFEUVRFQVUBFVAFVAFVAFEUFEAURQAAAABAFQAAQAABAAQQAEFEVFEAARUEAFQAARUEAAAAAAAAAAAAAAURQABRUEFAAAAABAFAAABFFRQFQBRFBVQQVUAVUAVUAURQFQBRAFEAUQBRAFQAAQAEBUABAAQFVAQAAQQAAFQAARUEAAAAAAAAAAAAAAAAUQBQAAAAAAAABQAAAABFFQBVQBVQBVQBVZVBRFBRAFAAVARRAFEAUQFAABBQBAVAAQAQABAAQAABABQAARUEAAAAAAAAAAAAAAAAAAAAAAFQBRAFAFAAAAAAAAFQRVVAFEUFEUFEBFVlQUQBRFAAAAABAUQBUAAQFAQFQAEABAAAAAVAAAAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAUAAAAAAABRFQUQBRFBRAFVlQUQBRAFEAUQBUAAQBUAAEAAUEAUAEAAAAAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAABRAFEAUQBRAFEAUQBQAABRUBFEAUAFEAUQBRAFEAUQBRAFEAAABAUAAAAAAAAAAAEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFEAUAAAQVBRRAFEAUQBRAABFAQFEAUQBRAFEUAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRBRQAAAAAAAAQFQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==";
};

const numberFormat = (number) => {
  return new Intl.NumberFormat().format(number);
};
export { getBlurImg, numberFormat };