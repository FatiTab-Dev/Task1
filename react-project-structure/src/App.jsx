import { Button } from "./components/ui/Button";
import { Card } from "./components/common/Card";
import { Table } from "./components/common/Table";
import { Posts } from "./components/Posts";

function App() {
  const tableColumns = ["Name", "Age", "city"];
  const tableData = [
    { name: "John Doe", age: 30, city: "New York" },
    { name: "Ahmed", age: 28, city: "Kahira" },
    { name: "Jane Smith", age: 25, city: "Los Angeles" },
    { name: "Sam Johnson", age: 35, city: "Chicago" },
  ];

  return (
    <div className="p-8 space-y-8 container">
      <h1 className="text-3xl text-dark my-5 font-bold">
        Assignment 2: Reusable Components
      </h1>

      <section className="space-y-4">
        <h2 className="text-xl text-primary my-3 font-semibold">
          Buttons Example
        </h2>
        <div className="flex gap-4">
          <Button
            text="Primary Action"
            onClick={() => alert("Primary Clicked")}
            variant="primary"
          />
          <Button
            text="Delete Action"
            onClick={() => alert("Danger Clicked")}
            variant="danger"
            disabled={false}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl text-dark font-semibold my-5">Cards Example</h2>
        <div className="row g-3">
          <div className="col-md-5">
            <Card
              className="card"
              title="Standard Card"
              description="This is a simple description for the card component."
              image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            />
          </div>
          <div className="col-md-5">
            <Card
              className="mx-1"
              title="Card with Children"
              description="This card wraps custom nested elements using children prop:"
            >
              <div className="mt-2 p-2 bg-gray-100 rounded text-sm text-blue-600 font-medium">
                ⭐ Nested Custom Element inside Children Prop
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl text-dark font-semibold my-5">Table Example</h2>
        <Table columns={tableColumns} data={tableData} striped={true} />
      </section>

      {/* Task 3 Section */}
      <section className="mt-5 pt-4 border-t">
        <header className="mb-4">
          <h2 className="h3 font-bold text-dark m-0">
            Task 3: React Query Posts
          </h2>
        </header>
        <main>
          <Posts />
        </main>
      </section>
    </div>
  );
}

export default App;
