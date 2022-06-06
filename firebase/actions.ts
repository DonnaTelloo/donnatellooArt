import { collection, getDocs } from "@firebase/firestore";
import { db } from "./index";

const handleGetCollections = async () => {
  const collections = collection(db, "collections");
  const collectionsSnapshot = await getDocs(collections);
  const collectionsList = collectionsSnapshot.docs.map((doc) => doc.data());

  return collectionsList;
};

export { handleGetCollections };
