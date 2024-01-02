function Button({ children }) {
  return <button>{children}</button>;
}

function Panel({ title, children }) {
  return (
    <section className="light">
      <h1>{title}</h1>
      <hr />
      {children}
    </section>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <p>
        Vero et quidem sed vitae deleniti sapiente enim aut voluptatem. Eos amet
        laborum aliquid. Earum itaque doloremque facilis praesentium et et
        repellat dolores veritatis. Velit excepturi nostrum atque. Iusto qui
        rerum. Consectetur consequatur et. Aut nemo velit fugiat aut. Quis quas
        consequatur velit ea ea. Magnam sapiente iste nihil ut. Iure quia minus
        odio sint officia optio rerum iure.
      </p>
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
    </Panel>
  );
}

export default Form;
