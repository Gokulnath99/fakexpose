import { collection, getDocs } from "firebase/firestore";
import DropZone from "@/components/Dropzone";
import { auth } from "@clerk/nextjs";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import TableWrapper from "@/components/Table/TableWrapper";

async function Dashboard() {
  const { userId } = auth();

  const docsResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
    status: doc.data().status,
  }));

  return (
    <div>
      <div className="bg-gradient-to-tl from-[#00274C] to-[#145089]
          w-full
          h-full
          absolute
          overflow-hidden
          -z-20
          top-0"></div>
      <DropZone />
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
      </div>
      <section className='"container space-y-5 p-11'>
        <h2 className="font-bold">All Files</h2>
        <div>
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
