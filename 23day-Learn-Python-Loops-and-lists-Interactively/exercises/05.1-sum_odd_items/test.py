import io, sys, os, pytest, re
path = os.path.dirname(os.path.abspath(__file__))+'/app.py'


@pytest.mark.it("Print the odd number")
def test_odd_numbers(capsys, app):
    import app
    captured = capsys.readouterr()
    assert "251\n" in captured.out

@pytest.mark.it("Use the for loop")
def test_for_loop():
    with open(path, 'r') as content_file:
        content = content_file.read()
        regex = re.compile(r"for(\s)")
        assert bool(regex.search(content)) == True